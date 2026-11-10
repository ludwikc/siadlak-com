import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Award, ChevronDown, ChevronRight, PencilLine, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CUSTOM_TRAINING, findTraining, trainingLabel, trainingsIn } from "@/config/booking/catalog";
import type { TrainingCategory } from "@/config/booking/catalog";
import type { Locale } from "@/config/mct/types";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

type MenuCopy = {
  placeholder: string;
  certified: string;
  customGroup: string;
  customOption: string;
  dayUnit: (n: number) => string;
};

type TrainingMenuProps = {
  id: string;
  value: string;
  locale: Locale;
  copy: MenuCopy;
  onChange: (value: string) => void;
  invalid?: boolean;
};

const panelClass =
  "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] overflow-y-auto min-w-[16rem] max-w-[min(32rem,calc(100vw-2rem))] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md";
const rowClass =
  "flex w-full cursor-pointer select-none items-center gap-3 rounded-sm px-3 py-2.5 text-base outline-none data-[highlighted]:bg-electric/10 data-[state=open]:bg-electric/10";

const GROUPS: Array<{ category: TrainingCategory; icon: LucideIcon }> = [
  { category: "certified", icon: Award },
  { category: "custom", icon: Wrench },
];

type GroupItemsProps = { category: TrainingCategory; value: string; locale: Locale; copy: MenuCopy; onChange: (value: string) => void };

function GroupItems({ category, value, locale, copy, onChange }: GroupItemsProps) {
  return (
    <>
      {trainingsIn(category).map((training) => (
        <DropdownMenu.Item
          key={training.id}
          onSelect={() => onChange(training.id)}
          className={cn(rowClass, "justify-between", value === training.id && "font-bold text-electric")}
        >
          <span>{trainingLabel(training, locale)}</span>
          <span className="shrink-0 text-sm text-on-light-dim">
            {training.defaultDays} {copy.dayUnit(training.defaultDays)}
          </span>
        </DropdownMenu.Item>
      ))}
      {category === "custom" && (
        <>
          <DropdownMenu.Separator className="-mx-1 my-1 h-px bg-border" />
          <DropdownMenu.Item
            onSelect={() => onChange(CUSTOM_TRAINING)}
            className={cn(rowClass, value === CUSTOM_TRAINING && "font-bold text-electric")}
          >
            <PencilLine className="h-4 w-4 text-electric" aria-hidden="true" />
            {copy.customOption}
          </DropdownMenu.Item>
        </>
      )}
    </>
  );
}

export default function TrainingMenu({ id, value, locale, copy, onChange, invalid }: TrainingMenuProps) {
  const isMobile = useIsMobile();
  const groupTitle = (category: TrainingCategory) => (category === "certified" ? copy.certified : copy.customGroup);
  const selected = findTraining(value);
  const label = selected ? trainingLabel(selected, locale) : value === CUSTOM_TRAINING ? copy.customOption : "";

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        id={id}
        aria-invalid={invalid ? "true" : undefined}
        className={cn(
          "flex h-10 w-full items-center justify-between gap-2 rounded-md border border-input bg-background px-3 py-2 text-left text-base",
          "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        )}
      >
        <span className={cn("line-clamp-1", !label && "text-muted-foreground")}>{label || copy.placeholder}</span>
        <ChevronDown className="h-4 w-4 shrink-0 opacity-50" aria-hidden="true" />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content align="start" sideOffset={4} collisionPadding={16} className={panelClass}>
          {isMobile
            ? GROUPS.map(({ category, icon: Icon }, index) => (
                <DropdownMenu.Group key={category}>
                  {index > 0 && <DropdownMenu.Separator className="-mx-1 my-1 h-px bg-border" />}
                  <DropdownMenu.Label className="flex items-center gap-3 px-3 pt-2.5 pb-1 text-sm font-bold uppercase tracking-wider text-on-light-dim">
                    <Icon className="h-4 w-4 text-electric" aria-hidden="true" />
                    {groupTitle(category)}
                  </DropdownMenu.Label>
                  <GroupItems category={category} value={value} locale={locale} copy={copy} onChange={onChange} />
                </DropdownMenu.Group>
              ))
            : GROUPS.map(({ category, icon: Icon }) => (
                <DropdownMenu.Sub key={category}>
                  <DropdownMenu.SubTrigger className={cn(rowClass, "justify-between font-bold")}>
                    <span className="flex items-center gap-3">
                      <Icon className="h-4 w-4 text-electric" aria-hidden="true" />
                      {groupTitle(category)}
                    </span>
                    <ChevronRight className="h-4 w-4 opacity-60" aria-hidden="true" />
                  </DropdownMenu.SubTrigger>
                  <DropdownMenu.Portal>
                    <DropdownMenu.SubContent sideOffset={6} collisionPadding={16} className={panelClass}>
                      <GroupItems category={category} value={value} locale={locale} copy={copy} onChange={onChange} />
                    </DropdownMenu.SubContent>
                  </DropdownMenu.Portal>
                </DropdownMenu.Sub>
              ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
