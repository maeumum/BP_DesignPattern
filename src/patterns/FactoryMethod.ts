// src/patterns/FactoryMethod.ts

// Product Interface
export interface Vehicle {
    drive(): string;
}

// Concrete Products
export class Car implements Vehicle {
    drive(): string {
        return "🚗 승용차가 도로를 주행합니다.";
    }
}

export class Truck implements Vehicle {
    drive(): string {
        return "🚚 트럭이 무거운 짐을 싣고 주행합니다.";
    }
}

// Creator Abstract Class
export abstract class VehicleFactory {
    // Factory Method: 서브클래스에서 구현하여 구체적인 Product를 반환합니다.
    public abstract createVehicle(): Vehicle;

    // Creator의 로직. Factory Method를 호출하여 Product에 의존하지 않고 사용합니다.
    public useVehicle(): string {
        const vehicle = this.createVehicle(); // 객체 생성 위임
        return `[공장 작업] 차량을 생산하고 운행합니다: ${vehicle.drive()}`;
    }
}

// Concrete Creators
export class CarFactory extends VehicleFactory {
    public createVehicle(): Vehicle {
        return new Car(); // Car 객체 생성
    }
}

export class TruckFactory extends VehicleFactory {
    public createVehicle(): Vehicle {
        return new Truck(); // Truck 객체 생성
    }
}