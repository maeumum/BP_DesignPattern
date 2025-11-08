<script setup lang="ts">
import { ref, computed } from 'vue';
import {
  PaymentContext,
  CreditCardPayment,
  KakaoPayPayment,
  NaverPayPayment,
  CashPayment,
  PaymentStrategy
} from '../patterns/behavioral/StrategyPattern';

const paymentContext = new PaymentContext();
const logs = ref<string[]>([]);
const selectedStrategy = ref('KakaoPay');
const amount = ref(15000);

const strategies: { name: string; icon: string; constructor: () => PaymentStrategy }[] = [
  { name: 'KakaoPay', icon: '💛', constructor: () => new KakaoPayPayment() },
  { name: 'NaverPay', icon: '💚', constructor: () => new NaverPayPayment() },
  { name: 'CreditCard', icon: '💳', constructor: () => new CreditCardPayment('1234567890123456') },
  { name: 'Cash', icon: '💵', constructor: () => new CashPayment() },
];

const currentIcon = computed(() => {
  return strategies.find(s => s.name === selectedStrategy.value)?.icon || '❓';
});

const executePayment = () => {
  const strategyInfo = strategies.find(s => s.name === selectedStrategy.value);
  if (!strategyInfo) return;

  // 1. 전략 객체 생성 및 Context에 설정 (런타임에 전략 교체)
  const strategy = strategyInfo.constructor();
  paymentContext.setStrategy(strategy);

  // 2. 결제 실행
  console.log(`\n=== Strategy Pattern 실행: ${strategyInfo.name} 전략 ===`);
  const result = paymentContext.executePayment(amount.value);
  console.log(result);

  logs.value = [
    `const strategy = new ${strategyInfo.name}Payment(...);`,
    `paymentContext.setStrategy(strategy);`,
    `const result = paymentContext.executePayment(${amount.value});`,
    '',
    `결과: ${result}`
  ];
};
</script>

<template>
  <div class="pattern-card custom-card">
    <h3>⭐ 행위 패턴 구현: Strategy Pattern</h3>
    <p class="description">결제 방법을 캡슐화하고 동적으로 교체 가능 (온라인 결제)</p>

    <div class="options-group strategy-group">
      <h4>결제 정보</h4>
      <div class="option-row">
        <label>결제 금액:</label>
        <input type="number" v-model.number="amount" min="1000" step="1000" />
      </div>

      <div class="option-row">
        <label>결제 방법:</label>
        <select v-model="selectedStrategy">
          <option v-for="strategy in strategies" :key="strategy.name" :value="strategy.name">
            {{ strategy.icon }} {{ strategy.name }}
          </option>
        </select>
      </div>
    </div>

    <button @click="executePayment" class="run-btn strategy-btn">
      {{ currentIcon }} {{ amount.toLocaleString() }}원 결제 실행
    </button>

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

.options-group {
  background: #e0f2fe;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}

.strategy-group {
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
}

.options-group h4 {
  margin-bottom: 0.75rem;
  color: #0369a1;
}

.strategy-group h4 {
  color: #16a34a;
}

.option-row {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  gap: 1rem;
}

.option-row label {
  font-weight: 600;
  width: 60px;
}

.option-row input, .option-row select {
  padding: 0.4rem;
  border-radius: 0.3rem;
  border: 1px solid #94a3b8;
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

.strategy-btn {
  background: #22c55e;
}

.strategy-btn:hover {
  background: #16a34a;
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