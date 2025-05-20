// ! Category: Easy
// Todo: Create an interface called User with properties: id, name, email, and phone, using appropriate data types where phone can be null. Use a utility type to create a new type that ensures phone cannot be null. Define a function called getNonNullableUser that accepts a parameter of type User and returns an object of the new type.

interface User {
  id: number;
  name: string;
  email: string;
  phone: number;
}

type NonNullableUser = Omit<User, "phone"> & {
  phone: NonNullable<User["phone"]>;
};

function getNonNullableUser(user: User): NonNullableUser {
  if (user.phone === null) {
    throw new Error("Phone number cannot be null");
  }

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
  };
}

const user1: User = {
  id: 135,
  name: "rainy",
  email: "rainy@gmail.com",
  phone: 123456789,
};

console.log(getNonNullableUser(user1));

console.log("");

// ! Category: Medium
// Todo: Create an interface called Order with properties: orderId, customerName, items, and discountCode, using appropriate data types where discountCode can be null. Use a utility type to create a new type that ensures discountCode cannot be null. Implement an OrderProcessor class that has an addOrder method to add orders to the list and a processOrders method to process all orders ensuring that discountCode cannot be null.

interface Order {
  orderId: number;
  customerName: string;
  items: string[];
  discountCode: string | null;
}

type NonNullableOrder = Omit<Order, "discountCode"> & {
  discountCode: NonNullable<Order["discountCode"]>;
};

class OrderProcessor {
  private orders: Order[] = [];

  addOrder(order: Order): void {
    this.orders.push(order);
  }

  processOrders(orderId: number): NonNullableOrder | undefined {
    const customer = this.orders.find((order) => order.orderId === orderId);

    if (customer) {
      if (customer.discountCode === null) {
        throw new Error("Discount code cannot be null");
      }
      return {
        orderId: customer.orderId,
        customerName: customer.customerName,
        items: customer.items,
        discountCode: customer.discountCode,
      };
    }
    return undefined;
  }
}

const newCustomer = new OrderProcessor();
newCustomer.addOrder({
  orderId: 777,
  customerName: "rashal",
  items: ["item1", "item2"],
  discountCode: "09sj-lx]'/.,,",
});

console.log(newCustomer.processOrders(777));
