<script setup lang="ts">
// --- 기본 예제 5가지 (제공된 코드) ---
import SingletonDemo from './components/SingletonDemo.vue';
import AdapterDemo from './components/AdapterDemo.vue';
import DecoratorDemo from './components/DecoratorDemo.vue';
import ObserverDemo from './components/ObserverDemo.vue';
import VisitorDemo from './components/VisitorDemo.vue';

// --- 기본 예제 1가지 (Factory Method, 추가 구현) ---
import FactoryMethodDemo from './components/FactoryMethodDemo.vue';

// --- 직접 구현 과제 3가지 ---
// 생성 패턴 (Builder)
import BuilderDemo from './components/BuilderDemo.vue';
// 구조 패턴 (Facade)
import FacadeDemo from './components/FacadeDemo.vue';
// 행위 패턴 (Strategy)
import StrategyDemo from './components/StrategyDemo.vue';
</script>

<template>
  <div class="app">
    <header class="header">
      <h1>🎯 디자인 패턴 구현 및 실행 데모</h1>
      <p>제공된 6가지 기본 예제와 직접 구현한 3가지 패턴을 확인하세요</p>
    </header>

    <main class="main">
      <h2>✅ 기본 예제 (6개 실행/캡처 대상)</h2>
      <p class="section-description">영상 강의에 포함된 패턴들. 실행 결과를 캡처하여 제출하세요.</p>
      <div class="grid default-grid">
        <SingletonDemo />
        <AdapterDemo />
        <DecoratorDemo />
        <ObserverDemo />
        <VisitorDemo />
        <FactoryMethodDemo /> <!-- 6번 패턴 -->
      </div>

      <h2 style="margin-top: 3rem;">⭐ 직접 구현 과제 (생성/구조/행위 각 1개)</h2>
      <p class="section-description">요구사항에 맞춰 제외 패턴을 피해 직접 구현한 3가지 패턴입니다.</p>
      <div class="grid custom-grid">
        <BuilderDemo />
        <FacadeDemo />
        <StrategyDemo />
      </div>

      <div class="guide">
        <h2>📚 과제 제출 가이드</h2>
        <div class="guide-content">
          <div class="guide-item">
            <span class="step">1단계</span>
            <p>위의 **총 9개** 패턴을 모두 실행하고 결과를 확인하세요.</p>
          </div>
          <div class="guide-item">
            <span class="step">2단계</span>
            <p>각 패턴의 실행 결과 화면을 **총 9장** 캡처하여 제출하세요.</p>
          </div>
          <div class="guide-item">
            <span class="step">3단계</span>
            <p>브라우저 개발자 도구(F12) **콘솔도 함께 캡처**하여 패턴의 동작을 명확히 보여주세요.</p>
          </div>
          <div class="guide-item">
            <span class="step">4단계</span>
            <p>제출은 **GitHub 저장소 주소**로 제출합니다.</p>
          </div>
        </div>

        <div class="warning">
          <strong>⚠️ 제외해야 할 패턴:</strong>
          <p>Singleton, Factory Method, Adapter, Decorator, Observer, Visitor</p>
          <p>⭐ **직접 구현 패턴:** Builder (생성), Facade (구조), Strategy (행위)</p>
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

h2 {
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  color: white;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}

.section-description {
  color: #cbd5e1;
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

.grid {
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.default-grid {
  /* 기본 6개 패턴 (작은 카드) */
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
}

.custom-grid {
  /* 직접 구현 3개 패턴 (조금 더 넓은 카드) */
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
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
  text-shadow: none;
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