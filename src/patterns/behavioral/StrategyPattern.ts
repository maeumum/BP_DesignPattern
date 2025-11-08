// src/patterns/behavioral/StrategyPattern.ts
export interface PaymentStrategy {
    pay(amount: number): string;
    getIcon(): string;
}

export class CreditCardPayment implements PaymentStrategy {
    constructor(private cardNumber: string) {}

    pay(amount: number): string {
        const masked = `****-****-****-${this.cardNumber.slice(-4)}`;
        return `💳 신용카드 ${masked}로 ${amount.toLocaleString()}원 결제`;
    }

    getIcon(): string { return "💳"; }
}

export class KakaoPayPayment implements PaymentStrategy {
    pay(amount: number): string {
        return `💛 카카오페이로 ${amount.toLocaleString()}원 결제`;
    }

    getIcon(): string { return "💛"; }
}

export class NaverPayPayment implements PaymentStrategy {
    pay(amount: number): string {
        return `💚 네이버페이로 ${amount.toLocaleString()}원 결제`;
    }

    getIcon(): string { return "💚"; }
}

export class CashPayment implements PaymentStrategy {
    pay(amount: number): string {
        return `💵 현금 ${amount.toLocaleString()}원 결제`;
    }

    getIcon(): string { return "💵"; }
}

export class PaymentContext {
    private strategy?: PaymentStrategy;

    setStrategy(strategy: PaymentStrategy): void {
        this.strategy = strategy;
    }

    executePayment(amount: number): string {
        if (!this.strategy) {
            return "❌ 결제 방법을 선택해주세요";
        }
        return this.strategy.pay(amount);
    }
}