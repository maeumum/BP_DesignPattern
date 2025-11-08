<script setup lang="ts">
import { ref } from 'vue';
import {
  FileElement,
  FolderElement,
  SizeCalculator,
  NamePrinter
} from '../patterns/Visitor';

const visitorType = ref<'size' | 'name'>('size');
const logs = ref<string[]>([]);

const runVisitor = () => {
  console.log('=== Visitor Pattern 실행 ===');

  // 파일 시스템 구조 생성
  const file1 = new FileElement('document.txt', 100);
  const file2 = new FileElement('image.png', 500);
  const file3 = new FileElement('video.mp4', 2000);

  const folder1 = new FolderElement('photos', [file2]);
  const folder2 = new FolderElement('videos', [file3]);
  const rootFolder = new FolderElement('root', [file1, folder1, folder2]);

  const newLogs: string[] = [];

  if (visitorType.value === 'size') {
    newLogs.push('// 크기 계산 Visitor 사용');
    newLogs.push('const visitor = new SizeCalculator();');
    newLogs.push('rootFolder.accept(visitor);');
    newLogs.push('');

    const visitor = new SizeCalculator();
    rootFolder.accept(visitor);

    newLogs.push('📁 root/');
    newLogs.push('  📄 document.txt (100KB)');
    newLogs.push('  📁 photos/');
    newLogs.push('    📄 image.png (500KB)');
    newLogs.push('  📁 videos/');
    newLogs.push('    📄 video.mp4 (2000KB)');
    newLogs.push('');
    newLogs.push(`📊 총 크기: ${visitor.getTotalSize()}KB`);

    console.log(`총 크기: ${visitor.getTotalSize()}KB`);
  } else {
    newLogs.push('// 이름 출력 Visitor 사용');
    newLogs.push('const visitor = new NamePrinter();');
    newLogs.push('rootFolder.accept(visitor);');
    newLogs.push('');
    newLogs.push('📁 폴더: root');
    newLogs.push('📄 파일: document.txt');
    newLogs.push('📁 폴더: photos');
    newLogs.push('📄 파일: image.png');
    newLogs.push('📁 폴더: videos');
    newLogs.push('📄 파일: video.mp4');
    newLogs.push('');
    newLogs.push('(콘솔 확인 ↓)');

    const visitor = new NamePrinter();
    rootFolder.accept(visitor);
  }

  logs.value = newLogs;
};
</script>

<template>
  <div class="pattern-card">
    <h3>5️⃣ Visitor Pattern</h3>
    <p class="description">객체 구조와 연산을 분리하여 새로운 연산을 추가</p>

    <div class="button-group">
      <button
          @click="visitorType = 'size'"
          :class="['visitor-type-btn', { active: visitorType === 'size' }]"
      >
        📊 크기 계산
      </button>
      <button
          @click="visitorType = 'name'"
          :class="['visitor-type-btn', { active: visitorType === 'name' }]"
      >
        📝 이름 출력
      </button>
    </div>

    <button @click="runVisitor" class="run-btn visitor">▶ 실행</button>

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

.visitor-type-btn {
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 2px solid #e5e7eb;
  background: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.875rem;
}

.visitor-type-btn.active {
  background: #ec4899;
  color: white;
  border-color: #ec4899;
}

.visitor-type-btn:hover:not(.active) {
  border-color: #ec4899;
  background: #fdf2f8;
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

.visitor {
  background: #ec4899;
}

.visitor:hover {
  background: #db2777;
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