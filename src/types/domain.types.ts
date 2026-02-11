export type MembershipStatus = "ACTIVE" | "PAST_DUE" | "CANCELED";

export type Member = {
  id: string;
  fullName: string;
  email?: string;
  status: MembershipStatus;
  points: number;
  tags: string[];
  createdAt: number; // epoch ms
};

export type Payment = {
  id: string;
  memberId: string;
  amount: number;
  currency: "MXN" | "USD";
  paid: boolean;
  createdAt: number;
};

export type ApiResponse<T> =
  | { ok: true; data: T }
  | { ok: false; error: { code: number; message: string } };
