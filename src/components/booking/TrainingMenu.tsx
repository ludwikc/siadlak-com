import { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { Award, Check, ChevronDown, PencilLine, Search, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  CUSTOM_TRAINING,
  findTraining,
  matchesQuery,
  TRAINING_AREAS,
  TRAININGS,
  trainingsIn,
} from "@/config/booking/catalog";
import type { BookingTraining, TrainingCategory } from "@/config/booking/catalog";
import type { Locale } from "@/config/mct/types";
import { cn } from "@/lib/utils";

type MenuCopy = {
  placeholder: string;
  certified: string;
  customGroup: string;
  customOption: string;
  certifiedHint: string;
  customHint: string;
  customOptionHint: string;
  search: string;
  results: string;
  noResults: string;
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

const CATEGORIES: Array<{ id: TrainingCategory; icon: LucideIcon }> = [
  { id: "certified", icon: Award },
  { id: "custom", icon: Wrench },
];

const codeClass =
  "inline-flex min-w-[4.5rem] shrink-0 justify-center rounded bg-electric/10 px-2 py-1 font-mono text-sm font-bold text-electric";
const headingClass = "m-0 text-xs font-bold uppercase tracking-wider text-on-light-dim";
const focusClass = "outline-none focus-visible:ring-2 focus-visible:ring-electric";

const TrainingName = ({ training, locale }: { training: BookingTraining; locale: Locale }) =>
  training.code ? (
    <span>
      <strong className="font-bold">{training.shortName}</strong> {training.title[locale]}
    </span>
  ) : (
    <span>{training.title[locale]}</span>
  );

type RowProps = { training: BookingTraining; locale: Locale; selected: boolean; days: string; onSelect: () => void };

const TrainingRow = ({ training, locale, selected, days, onSelect }: RowProps) => (
  <li>
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={cn(
        "flex w-full items-center gap-3 rounded-md px-2.5 py-2.5 text-left transition-colors hover:bg-electric/10",
        focusClass,
        selected && "bg-electric/10",
      )}
    >
      {training.code && <span className={codeClass}>{training.shortName}</span>}
      <span className="flex-1 text-[0.95rem] leading-snug">{training.title[locale]}</span>
      <span className="shrink-0 whitespace-nowrap text-sm text-on-light-dim">{days}</span>
      {selected && <Check className="h-4 w-4 shrink-0 text-electric" aria-hidden="true" />}
    </button>
  </li>
);

export default function TrainingMenu({ id, value, locale, copy, onChange, invalid }: TrainingMenuProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const selected = findTraining(value);
  const [category, setCategory] = useState<TrainingCategory>(selected?.category ?? "certified");
  const searching = query.trim().length > 0;

  const choose = (next: string) => {
    onChange(next);
    setOpen(false);
    setQuery("");
  };

  const row = (training: BookingTraining) => (
    <TrainingRow
      key={training.id}
      training={training}
      locale={locale}
      selected={value === training.id}
      days={`${training.defaultDays} ${copy.dayUnit(training.defaultDays)}`}
      onSelect={() => choose(training.id)}
    />
  );

  const results = TRAININGS.filter((training) => matchesQuery(training, locale, query));
  const areas = TRAINING_AREAS.map((area) => ({ ...area, items: trainingsIn(category, area.id) })).filter(
    (area) => area.items.length > 0,
  );

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger
        id={id}
        aria-invalid={invalid ? "true" : undefined}
        className={cn(
          "flex h-11 w-full items-center justify-between gap-2 rounded-md border border-input bg-background px-3 py-2 text-left text-base",
          "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        )}
      >
        <span className={cn("line-clamp-1", !selected && value !== CUSTOM_TRAINING && "text-muted-foreground")}>
          {selected ? (
            <TrainingName training={selected} locale={locale} />
          ) : value === CUSTOM_TRAINING ? (
            copy.customOption
          ) : (
            copy.placeholder
          )}
        </span>
        <ChevronDown className="h-4 w-4 shrink-0 opacity-50" aria-hidden="true" />
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          align="start"
          sideOffset={6}
          collisionPadding={16}
          className="z-50 flex max-h-[min(34rem,var(--radix-popover-content-available-height))] w-[min(62rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-[var(--border-radius-md)] border border-border bg-popover text-popover-foreground shadow-lg md:flex-row"
        >
          <div
            role="tablist"
            aria-orientation="vertical"
            className="flex shrink-0 gap-1 border-b border-border bg-muted/40 p-2 md:w-60 md:flex-col md:border-b-0 md:border-r md:p-3"
          >
            {CATEGORIES.map(({ id: categoryId, icon: Icon }) => {
              const active = !searching && category === categoryId;
              return (
                <button
                  key={categoryId}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onMouseEnter={() => setCategory(categoryId)}
                  onFocus={() => setCategory(categoryId)}
                  onClick={() => {
                    setCategory(categoryId);
                    setQuery("");
                  }}
                  className={cn(
                    "flex min-w-0 flex-1 items-center gap-2 rounded-md px-2.5 py-2.5 text-left transition-colors md:flex-none md:gap-3 md:px-3 md:py-3",
                    focusClass,
                    active ? "bg-background shadow-sm ring-1 ring-electric/40" : "hover:bg-background/60",
                  )}
                >
                  <span
                    className={cn(
                      "hidden h-9 w-9 shrink-0 items-center justify-center rounded-md md:flex",
                      active ? "bg-electric text-white" : "bg-electric/10 text-electric",
                    )}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-bold leading-tight md:text-[0.95rem]">
                      {categoryId === "certified" ? copy.certified : copy.customGroup}
                    </span>
                    <span className="mt-0.5 hidden text-sm leading-snug text-on-light-dim md:block">
                      {categoryId === "certified" ? copy.certifiedHint : copy.customHint}
                    </span>
                  </span>
                  <span className="ml-auto rounded-full bg-electric/10 px-2 py-0.5 text-xs font-bold text-electric">
                    {trainingsIn(categoryId).length}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex min-h-0 flex-1 flex-col">
            <label className="flex items-center gap-2 border-b border-border px-4 py-3">
              <Search className="h-4 w-4 shrink-0 text-on-light-dim" aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={copy.search}
                aria-label={copy.search}
                className="w-full bg-transparent text-base outline-none placeholder:text-muted-foreground"
              />
            </label>

            <div className="min-h-0 flex-1 overflow-y-auto p-3">
              {searching ? (
                <section>
                  <h3 className={cn(headingClass, "px-2.5 pb-2")}>{copy.results}</h3>
                  {results.length > 0 ? (
                    <ul className="m-0 list-none p-0">{results.map(row)}</ul>
                  ) : (
                    <p className="m-0 px-2.5 py-2 text-on-light-dim">{copy.noResults}</p>
                  )}
                </section>
              ) : (
                <div className={cn("grid gap-x-4 gap-y-5", areas.length > 1 && "lg:grid-cols-2")}>
                  {areas.map((area) => (
                    <section key={area.id}>
                      <h3 className={cn(headingClass, "flex items-center justify-between border-b border-border px-2.5 pb-2")}>
                        {area.label}
                        <span className="font-normal">{area.items.length}</span>
                      </h3>
                      <ul className="m-0 mt-1 list-none p-0">{area.items.map(row)}</ul>
                    </section>
                  ))}
                </div>
              )}

              {(searching || category === "custom") && (
                <button
                  type="button"
                  onClick={() => choose(CUSTOM_TRAINING)}
                  aria-pressed={value === CUSTOM_TRAINING}
                  className={cn(
                    "mt-4 flex w-full items-center gap-3 rounded-md border border-dashed border-electric/50 px-3 py-3 text-left transition-colors hover:bg-electric/10",
                    focusClass,
                    value === CUSTOM_TRAINING && "bg-electric/10",
                  )}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-electric/10 text-electric">
                    <PencilLine className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-[0.95rem] font-bold">{copy.customOption}</span>
                    <span className="block text-sm text-on-light-dim">{copy.customOptionHint}</span>
                  </span>
                </button>
              )}
            </div>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
