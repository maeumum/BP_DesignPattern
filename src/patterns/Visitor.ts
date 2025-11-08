// Visitor 인터페이스
export interface Visitor {
  visitFile(file: FileElement): void;
  visitFolder(folder: FolderElement): void;
}

// Element 인터페이스
export interface Element {
  accept(visitor: Visitor): void;
}

// 구체적인 Element 클래스
export class FileElement implements Element {
  constructor(public name: string, public size: number) {}

  accept(visitor: Visitor): void {
    visitor.visitFile(this); // 이중 디스패치 발생
  }
}

export class FolderElement implements Element {
  constructor(public name: string, public children: Element[] = []) {}

  accept(visitor: Visitor): void {
    visitor.visitFolder(this);
  }
}

// 구체적인 Visitor 클래스
// 파일 크기를 계산하는 Visitor
export class SizeCalculator implements Visitor {
  private totalSize = 0;

  visitFile(file: FileElement): void {
    this.totalSize += file.size;
  }

  visitFolder(folder: FolderElement): void {
    folder.children.forEach(child => child.accept(this));
  }

  getTotalSize(): number {
    return this.totalSize;
  }
}

// 이름을 출력하는 Visitor
export class NamePrinter implements Visitor {
  visitFile(file: FileElement): void {
    console.log(`📄 파일: ${file.name}`);
  }

  visitFolder(folder: FolderElement): void {
    console.log(`📁 폴더: ${folder.name}`);
    folder.children.forEach(child => child.accept(this));
  }
}