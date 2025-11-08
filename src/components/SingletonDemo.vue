<script setup lang="ts">
import { ref } from 'vue';
import Singleton from '../patterns/Singleton';

const logs = ref<string[]>([]);

const runSingleton = () => {
  const a = Singleton.getInstance();
  const b = Singleton.getInstance();

  console.log(a === b); // true
  a.say();

  logs.value = [
    'const a = Singleton.getInstance();',
    'const b = Singleton.getInstance();',
    `console.log(a === b); // ${a === b}`,
    'a.say(); // 콘솔 확인 ↓'
  ];
};
</script>

<template>
  <div class="pattern-card">
    <h3>1️⃣ Singleton Pattern</h3>
    <p class="description">클래스의 인스턴스가 오직 하나만 생성되도록 보장</p>

    <button @click="runSingleton" class="run-btn">▶ 실행</button>

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

.run-btn {
  width: 100%;
  background: #3b82f6;
  color: white;
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.run-btn:hover {
  background: #2563eb;
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