<script setup lang="ts">
import SingletonDemo from './components/SingletonDemo.vue';
import AdapterDemo from './components/AdapterDemo.vue';
import DecoratorDemo from './components/DecoratorDemo.vue';
import ObserverDemo from './components/ObserverDemo.vue';
import VisitorDemo from './components/VisitorDemo.vue';
</script>

<template>
  <div class="app">
    <header class="header">
      <h1>🎯 디자인 패턴 6개 실행 데모</h1>
      <p>제공된 TypeScript 코드를 실행하고 결과를 확인하세요</p>
    </header>

    <main class="main">
      <div class="grid">
        <SingletonDemo />
        <AdapterDemo />
        <DecoratorDemo />
        <ObserverDemo />
        <VisitorDemo />

        <!-- Factory Method 자리 -->
        <div class="pattern-card placeholder">
          <h3>6️⃣ Factory Method Pattern</h3>
          <p class="description">
            제공된 코드에 Factory Method 예시를 추가하여<br>
            총 6개 패턴을 완성하세요
          </p>
          <div class="hint">
            💡 강의 자료의 Factory Method 코드를 참고하세요
          </div>
        </div>
      </div>

      <div class="guide">
        <h2>📚 과제 제출 가이드</h2>
        <div class="guide-content">
          <div class="guide-item">
            <span class="step">1단계</span>
            <p>위의 각 패턴을 실행하고 결과를 확인하세요</p>
          </div>
          <div class="guide-item">
            <span class="step">2단계</span>
            <p>각 패턴의 실행 결과 화면을 캡처하세요 (6장)</p>
          </div>
          <div class="guide-item">
            <span class="step">3단계</span>
            <p>브라우저 개발자 도구(F12) 콘솔도 함께 캡처</p>
          </div>
          <div class="guide-item">
            <span class="step">4단계</span>
            <p>생성/구조/행위 패턴에서 각 1개씩 직접 구현</p>
          </div>
        </div>

        <div class="warning">
          <strong>⚠️ 제외해야 할 패턴:</strong>
          <p>Singleton, Factory Method, Adapter, Decorator, Observer, Visitor</p>
        </div>
      </div>
    </main>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

.app {
  min-height: 100vh;
  padding: 2rem 1rem;
}

.header {
  text-align: center;
  color: white;
  margin-bottom: 2rem;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.header p {
  font-size: 1.125rem;
  opacity: 0.95;
}

.main {
  max-width: 1400px;
  margin: 0 auto;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.placeholder {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%) !important;
  border: 2px dashed #f59e0b;
}

.placeholder h3 {
  color: #92400e;
}

.placeholder .description {
  color: #78350f !important;
  line-height: 1.6;
}

.hint {
  background: #fffbeb;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #fcd34d;
  color: #92400e;
  font-size: 0.875rem;
  margin-top: 1rem;
}

.guide {
  background: white;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.guide h2 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #1f2937;
}

.guide-content {
  display: grid;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.guide-item {
  display: flex;
  align-items: start;
  gap: 1rem;
}

.step {
  background: #3b82f6;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 0.875rem;
  white-space: nowrap;
}

.guide-item p {
  color: #4b5563;
  line-height: 1.6;
}

.warning {
  background: #fef2f2;
  border: 2px solid #fecaca;
  padding: 1rem;
  border-radius: 0.5rem;
}

.warning strong {
  color: #991b1b;
  display: block;
  margin-bottom: 0.5rem;
}

.warning p {
  color: #7f1d1d;
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .header h1 {
    font-size: 1.75rem;
  }

  .header p {
    font-size: 0.875rem;
  }

  .grid {
    grid-template-columns: 1fr;
  }
}
</style>