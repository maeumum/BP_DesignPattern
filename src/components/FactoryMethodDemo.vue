<script setup lang="ts">
import { ref } from 'vue';
import { CarFactory, TruckFactory, VehicleFactory } from '../patterns/FactoryMethod';

const logs = ref<string[]>([]);
const currentFactory = ref<'car' | 'truck'>('car');

const runFactoryMethod = () => {
  let factory: VehicleFactory;
  let factoryClassName: string;

  if (currentFactory.value === 'car') {
    factory = new CarFactory();
    factoryClassName = 'CarFactory';
  } else {
    factory = new TruckFactory();
    factoryClassName = 'TruckFactory';
  }

  console.log(`\n=== Factory Method 실행: ${factoryClassName} ===`);
  const result = factory.useVehicle();
  console.log(result);

  logs.value = [
    `const factory = new ${factoryClassName}();`,
    `const result = factory.useVehicle();`,
    '',
    `결과: ${result}`,
    '(콘솔 확인 ↓)'
  ];
};

const changeFactory = (type: 'car' | 'truck') => {
  currentFactory.value = type;
  logs.value = [];
};
</script>

<template>
  <div class="pattern-card placeholder">
    <h3>6️⃣ Factory Method Pattern</h3>
    <p class="description">객체 생성을 서브 클래스에서 결정하도록 위임</p>

    <div class="button-group">
      <button
          @click="changeFactory('car')"
          :class="['factory-type-btn', { active: currentFactory === 'car' }]"
      >
        🚗 승용차 공장
      </button>
      <button
          @click="changeFactory('truck')"
          :class="['factory-type-btn', { active: currentFactory === 'truck' }]"
      >
        🚚 트럭 공장
      </button>
    </div>

    <button @click="runFactoryMethod" class="run-btn factory-method">▶ 차량 생산 및 운행</button>

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

.button-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.factory-type-btn {
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 2px solid #fcd34d;
  background: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.875rem;
}

.factory-type-btn.active {
  background: #f59e0b;
  color: white;
  border-color: #f59e0b;
}

.factory-type-btn:hover:not(.active) {
  border-color: #f59e0b;
  background: #fffbeb;
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

.factory-method {
  background: #f59e0b; /* Placeholder color from App.vue */
}

.factory-method:hover {
  background: #d97706;
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