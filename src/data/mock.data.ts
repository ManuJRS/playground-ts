import { Member, Payment } from "../types/domain.types";

export const members: Member[] = [
  { id: "m1", fullName: "Ana Ruiz", email: "ana@mail.com", status: "ACTIVE", points: 120, tags: ["vip"], createdAt: 1700000000000 },
  { id: "m2", fullName: "Luis Pérez", status: "PAST_DUE", points: 40, tags: ["new"], createdAt: 1705000000000 },
  { id: "m3", fullName: "María López", email: "maria@mail.com", status: "CANCELED", points: 10, tags: [], createdAt: 1690000000000 },
  { id: "m4", fullName: "Carlos Díaz", email: "carlos@mail.com", status: "ACTIVE", points: 75, tags: ["beta", "vip"], createdAt: 1710000000000 },
];

export const payments: Payment[] = [
  { id: "p1", memberId: "m1", amount: 299, currency: "MXN", paid: true, createdAt: 1712000000000 },
  { id: "p2", memberId: "m2", amount: 199, currency: "MXN", paid: false, createdAt: 1713000000000 },
  { id: "p3", memberId: "m4", amount: 25, currency: "USD", paid: true, createdAt: 1711000000000 },
  { id: "p4", memberId: "m4", amount: 299, currency: "MXN", paid: false, createdAt: 1713500000000 },
];
