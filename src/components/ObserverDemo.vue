<script setup lang="ts">
import { ref } from 'vue';
import { Stock, PriceDisplay, PriceAlert } from '../patterns/Observer';

const stock = new Stock();
const display = new PriceDisplay();
const alert = new PriceAlert();

const registered = ref(false);
const logs = ref<string[]>([]);

const registerObservers = () => {
  console.log('=== Observer Pattern 실행 ===');

  stock.register(display);
  stock.register(alert);

  registered.value = true;
  logs.value = [
    'stock.register(display);',
    'stock.register(alert);',
    '',
    '✅ 옵저버 등록 완료'
  ];
};

const updatePrice = (price: number) => {
  console.log(`\n=== 주가 업데이트: ${price}원 ===`);

  stock.setPrice(price);

  logs.value = [
    `stock.setPrice(${price});`,
    '',
    '📺 화면에 표시: 현재 주가 = ' + price,
    price > 100 ? `🚨 알림: 주가 ${price} 초과!` : '✅ 주가 정상 범위'
  ];
};
</script>

<template>
  <div class="pattern-card">
    <h3>4️⃣ Observer Pattern</h3>
    <p class="description">객체의 상태 변화를 관찰자들에게 자동으로 알림</p>

    <button
        v-if="!registered"
        @click="registerObservers"
        class="run-btn observer"
    >
      ▶ 옵저버 등록
    </button>

    <div v-else class="button-group">
      <button @click="updatePrice(90)" class="price-btn normal">주가 90원</button>
      <button @click="updatePrice(120)" class="price-btn alert">주가 120원</button>
      <button @click="updatePrice(150)" class="price-btn alert">주가 150원</button>
    </div>

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
  color: white;
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.observer {
  background: #f97316;
}

.observer:hover {
  background: #ea580c;
}

.button-group {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
}

.price-btn {
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.875rem;
}

.normal {
  background: #3b82f6;
}

.normal:hover {
  background: #2563eb;
}

.alert {
  background: #ef4444;
}

.alert:hover {
  background: #dc2626;
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