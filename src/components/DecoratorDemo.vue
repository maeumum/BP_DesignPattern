<script setup lang="ts">
import { ref } from 'vue';
import {
  BaseNotifier,
  EmailNotifier,
  SMSNotifier,
  SlackNotifier,
  type Notifier
} from '../patterns/Decorator';

const selectedDecorators = ref<string[]>([]);
const logs = ref<string[]>([]);

const toggleDecorator = (decorator: string) => {
  if (selectedDecorators.value.includes(decorator)) {
    selectedDecorators.value = selectedDecorators.value.filter(d => d !== decorator);
  } else {
    selectedDecorators.value.push(decorator);
  }
};

const runDecorator = () => {
  console.log('=== Decorator Pattern 실행 ===');

  let notifier: Notifier = new BaseNotifier();

  logs.value = ['let notifier: Notifier = new BaseNotifier();'];

  // 기능을 런타임에서 동적으로 조합
  if (selectedDecorators.value.includes('email')) {
    notifier = new EmailNotifier(notifier);
    logs.value.push('notifier = new EmailNotifier(notifier);');
  }
  if (selectedDecorators.value.includes('sms')) {
    notifier = new SMSNotifier(notifier);
    logs.value.push('notifier = new SMSNotifier(notifier);');
  }
  if (selectedDecorators.value.includes('slack')) {
    notifier = new SlackNotifier(notifier);
    logs.value.push('notifier = new SlackNotifier(notifier);');
  }

  logs.value.push('');
  logs.value.push('notifier.send("긴급 서버 장애 발생!");');
  logs.value.push('// 콘솔 확인 ↓');

  notifier.send("긴급 서버 장애 발생!");
};
</script>

<template>
  <div class="pattern-card">
    <h3>3️⃣ Decorator Pattern</h3>
    <p class="description">런타임에 객체에 기능을 동적으로 추가</p>

    <div class="checkbox-group">
      <label class="checkbox-label">
        <input
            type="checkbox"
            :checked="selectedDecorators.includes('email')"
            @change="toggleDecorator('email')"
        />
        <span>📧 Email 알림</span>
      </label>

      <label class="checkbox-label">
        <input
            type="checkbox"
            :checked="selectedDecorators.includes('sms')"
            @change="toggleDecorator('sms')"
        />
        <span>📱 SMS 알림</span>
      </label>

      <label class="checkbox-label">
        <input
            type="checkbox"
            :checked="selectedDecorators.includes('slack')"
            @change="toggleDecorator('slack')"
        />
        <span>💬 Slack 알림</span>
      </label>
    </div>

    <button @click="runDecorator" class="run-btn decorator">▶ 알림 발송</button>

    <div v-if="logs.length > 0" class="console">
      <div v-for="(log, idx) in logs" :key="idx">{{ log }}</div>
    </div>
  </div>
</template>

<style scoped>
.pattern-card {
  background: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h3 {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #1f2937;
}

.description {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 1rem;
}

.checkbox-group {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.875rem;
}

.checkbox-label input {
  width: 1rem;
  height: 1rem;
  cursor: pointer;
}

.run-btn {
  width: 100%;
  color: white;
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.decorator {
  background: #a855f7;
}

.decorator:hover {
  background: #9333ea;
}

.console {
  margin-top: 1rem;
  background: #1e293b;
  color: #4ade80;
  padding: 1rem;
  border-radius: 0.5rem;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
}

.console > div {
  margin-bottom: 0.25rem;
}
</style>