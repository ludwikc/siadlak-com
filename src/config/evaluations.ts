export type TrainingOption = {
  /** Stable id — becomes the folder name in the responses repo */
  id: string;
  label: string;
};

export const TRAININGS: TrainingOption[] = [
  {
    id: "claude-in-excel-oslo-2026-08-27",
    label: "Claude in Excel — Oslo, Norway — Aug 27, 2026",
  },
];
