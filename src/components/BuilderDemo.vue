<script setup lang="ts">
import { ref, computed } from 'vue';
import { PizzaBuilder, Pizza } from '../patterns/creational/BuilderPattern';

const selectedSize = ref('Medium');
const selectedCrust = ref('Regular');
const selectedCheese = ref('Mozzarella');
const selectedToppings = ref<string[]>([]);
const builtPizza = ref<Pizza | null>(null);
const logs = ref<string[]>([]);

const toppingOptions = ['Pepperoni', 'Mushroom', 'Onion', 'Bacon', 'Pineapple'];

const toggleTopping = (topping: string) => {
  if (selectedToppings.value.includes(topping)) {
    selectedToppings.value = selectedToppings.value.filter(t => t !== topping);
  } else {
    selectedToppings.value.push(topping);
  }
};

const buildPizza = () => {
  logs.value = [];
  console.log('=== Builder Pattern 실행 ===');

  const builder = new PizzaBuilder().reset(); // Reset builder for new pizza

  logs.value.push('const builder = new PizzaBuilder().reset();');
  logs.value.push(`builder.setSize('${selectedSize.value}')`);
  logs.value.push(`builder.setCrust('${selectedCrust.value}')`);
  logs.value.push(`builder.setCheese('${selectedCheese.value}')`);

  builder.setSize(selectedSize.value);
  builder.setCrust(selectedCrust.value);
  builder.setCheese(selectedCheese.value);

  selectedToppings.value.forEach(topping => {
    builder.addTopping(topping);
    logs.value.push(`builder.addTopping('${topping}')`);
  });

  const pizza = builder.build();
  builtPizza.value = pizza;
  logs.value.push('');
  logs.value.push('const pizza = builder.build();');
  logs.value.push(`✅ 피자 생성 완료: ${pizza.price.toLocaleString()}원`);
};

const displayPizza = computed(() => {
  if (!builtPizza.value) return null;
  return `사이즈: ${builtPizza.value.size}, 도우: ${builtPizza.value.crust}, 치즈: ${builtPizza.value.cheese}, 토핑: ${builtPizza.value.toppings.join(', ')}`;
});

</script>

<template>
  <div class="pattern-card custom-card">
    <h3>⭐ 생성 패턴 구현: Builder Pattern</h3>
    <p class="description">복잡한 객체 생성 단계 분리 (피자 주문)</p>

    <div class="options-group">
      <h4>🍕 옵션 선택</h4>
      <div class="option-row">
        <label>사이즈:</label>
        <select v-model="selectedSize">
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
      </div>

      <div class="option-row">
        <label>도우:</label>
        <select v-model="selectedCrust">
          <option>Regular</option>
          <option>Thin</option>
          <option>Stuffed</option>
        </select>
      </div>

      <div class="option-row">
        <label>치즈:</label>
        <select v-model="selectedCheese">
          <option>Mozzarella</option>
          <option>Extra</option>
        </select>
      </div>

      <div class="topping-group">
        <label>토핑:</label>
        <div class="checkbox-container">
          <label v-for="topping in toppingOptions" :key="topping" class="checkbox-label">
            <input
                type="checkbox"
                :value="topping"
                @change="toggleTopping(topping)"
                :checked="selectedToppings.includes(topping)"
            />
            <span>{{ topping }}</span>
          </label>
        </div>
      </div>
    </div>

    <button @click="buildPizza" class="run-btn builder-btn">▶ 피자 주문 (Build)</button>

    <div v-if="builtPizza" class="result-box">
      <strong>🎉 완성된 피자 ({{ builtPizza.price.toLocaleString() }}원)</strong>
      <p>{{ displayPizza }}</p>
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

.options-group {
  background: #e0f2fe;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}

.options-group h4 {
  margin-bottom: 0.75rem;
  color: #0369a1;
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

.option-row select {
  padding: 0.4rem;
  border-radius: 0.3rem;
  border: 1px solid #94a3b8;
}

.topping-group {
  margin-top: 1rem;
}

.topping-group label {
  font-weight: 600;
}

.checkbox-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.5rem;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
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

.builder-btn {
  background: #0ea5e9;
}

.builder-btn:hover {
  background: #0284c7;
}

.result-box {
  margin-top: 1rem;
  padding: 1rem;
  border: 2px dashed #0ea5e9;
  border-radius: 0.5rem;
  background: #fefce8;
}

.result-box strong {
  color: #0ea5e9;
  margin-bottom: 0.5rem;
  display: block;
}

.custom-console {
  background: #0f172a;
}
</style>