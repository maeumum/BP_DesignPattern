<script setup lang="ts">
import { ref } from 'vue';
import { SmartHomeFacade } from '../patterns/structural/FacadePattern';

const facade = new SmartHomeFacade();
const logs = ref<string[]>([]);

const runMode = (mode: 'leaveHome' | 'arriveHome' | 'sleepMode' | 'movieMode') => {
  let modeName: string;
  let result: string[];

  switch (mode) {
    case 'leaveHome':
      modeName = '외출 모드';
      result = facade.leaveHome();
      break;
    case 'arriveHome':
      modeName = '귀가 모드';
      result = facade.arriveHome();
      break;
    case 'sleepMode':
      modeName = '수면 모드';
      result = facade.sleepMode();
      break;
    case 'movieMode':
      modeName = '영화 모드';
      result = facade.movieMode();
      break;
    default:
      return;
  }

  console.log(`\n=== Facade Pattern 실행: ${modeName} ===`);
  result.forEach(log => console.log(log));

  logs.value = [
    `// SmartHomeFacade.${mode}() 호출`,
    '',
    ...result.map(log => `🏠 ${log}`)
  ];
};
</script>

<template>
  <div class="pattern-card custom-card">
    <h3>⭐ 구조 패턴 구현: Facade Pattern</h3>
    <p class="description">복잡한 서브 시스템을 하나의 단순화된 인터페이스로 제공 (스마트 홈)</p>

    <div class="button-group-4">
      <button @click="runMode('leaveHome')" class="run-btn facade-btn">
        <span class="icon">🏃</span> 외출 모드
      </button>
      <button @click="runMode('arriveHome')" class="run-btn facade-btn">
        <span class="icon">🏡</span> 귀가 모드
      </button>
      <button @click="runMode('sleepMode')" class="run-btn facade-btn">
        <span class="icon">🛌</span> 수면 모드
      </button>
      <button @click="runMode('movieMode')" class="run-btn facade-btn">
        <span class="icon">🍿</span> 영화 모드
      </button>
    </div>

    <div v-if="logs.length > 0" class="console custom-console">
      <div v-for="(log, idx) in logs" :key="idx">{{ log }}</div>
    </div>
  </div>
</template>

<style scoped>
/* 커스텀 스타일 */
.custom-card {
  background: #f0f9ff;
  border: 1px solid #bae6fd;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.custom-card h3 {
  color: #0284c7;
}

.custom-card .description {
  color: #38bdf8;
}

.button-group-4 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
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

.facade-btn {
  background: #10b981;
  font-size: 0.875rem;
  padding: 0.6rem;
}

.facade-btn:hover {
  background: #059669;
}

.icon {
  margin-right: 0.25rem;
  font-size: 1rem;
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

.custom-console {
  background: #0f172a;
}
</style>