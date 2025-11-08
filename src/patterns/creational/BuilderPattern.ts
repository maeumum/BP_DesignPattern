// src/patterns/creational/BuilderPattern.ts
export interface Pizza {
    size: string;
    crust: string;
    cheese: string;
    toppings: string[];
    sauce: string;
    price: number;
}

export class PizzaBuilder {
    private pizza: Pizza = {
        size: 'Medium',
        crust: 'Regular',
        cheese: 'Mozzarella',
        toppings: [],
        sauce: 'Tomato',
        price: 10000
    };

    setSize(size: string): this {
        this.pizza.size = size;
        if (size === 'Large') this.pizza.price += 3000;
        if (size === 'Small') this.pizza.price -= 2000;
        return this;
    }

    setCrust(crust: string): this {
        this.pizza.crust = crust;
        if (crust === 'Thin') this.pizza.price += 1000;
        if (crust === 'Stuffed') this.pizza.price += 2000;
        return this;
    }

    setCheese(cheese: string): this {
        this.pizza.cheese = cheese;
        if (cheese === 'Extra') this.pizza.price += 2000;
        return this;
    }

    addTopping(topping: string): this {
        this.pizza.toppings.push(topping);
        this.pizza.price += 1500;
        return this;
    }

    setSauce(sauce: string): this {
        this.pizza.sauce = sauce;
        return this;
    }

    build(): Pizza {
        return { ...this.pizza };
    }

    reset(): this {
        this.pizza = {
            size: 'Medium',
            crust: 'Regular',
            cheese: 'Mozzarella',
            toppings: [],
            sauce: 'Tomato',
            price: 10000
        };
        return this;
    }
}