import UTest from "@/components/UTest.vue";
declare module "vue" {
  export interface GlobalComponents {
    UTest: typeof UTest;
  }
}
