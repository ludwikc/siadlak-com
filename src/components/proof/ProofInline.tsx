import { proof } from "@/config/proof";

/**
 * Renders a single canonical proof value inline. The proof config is the ONLY
 * allowed source of these numbers (see .agents/product-marketing-context.md
 * "uczciwy social proof"); proof.spec.ts guards against banned literals.
 */
export default function ProofInline({ stat }: { stat: keyof typeof proof }) {
  return <>{proof[stat]}</>;
}
