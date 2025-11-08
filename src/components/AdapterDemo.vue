<script setup lang="ts">
import { ref } from 'vue';
import { NewPaymentGateway, PaymentAdapter, processPayment } from '../patterns/Adapter';

const result = ref<string>('');

const runAdapter = () => {
  console.log('=== Adapter Pattern 실행 ===');

  const newGateway = new NewPaymentGateway();
  const adapter = new PaymentAdapter(newGateway);

  // 클라이언트는 여전히 OldPaymentProcessor 인터페이스만 사용
  processPayment(adapter, 5000);

  result.value = '✅ 5000원을 새 결제 게이트웨이로 처리함\n(콘솔 확인 ↓)';
};
</script>

<template>
  <div class="pattern-card">
    <h3>2️⃣ Adapter Pattern</h3>
    <p class="description">호환되지 않는 인터페이스를 변환하여 함께 동작</p>

    <button @click="runAdapter" class="run-btn adapter">▶ 결제 처리 (5000원)</button>

    <div v-if="result" class="console">
      {{ result }}
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

.adapter {
  background: #10b981;
}

.adapter:hover {
  background: #059669;
}

.console {
  margin-top: 1rem;
  background: #1e293b;
  color: #4ade80;
  padding: 1rem;
  border-radius: 0.5rem;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
  white-space: pre-line;
}
</style>