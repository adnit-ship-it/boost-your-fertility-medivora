import type { Product } from "~/types/intake-form/checkout";

export interface IntakeFormConfig {
  defaultQuizId: string;
  defaultProductCategory?: Product["category"];
}

export const intakeFormConfig: IntakeFormConfig = {
  defaultQuizId: "fertility-unified",
  defaultProductCategory: "fertility",
};

