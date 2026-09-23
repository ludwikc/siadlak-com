import { useEffect, useMemo, useState } from "react";
import { fill } from "@/config/mct/copy";
import { courses } from "@/config/mct/courses";
import { sessions } from "@/config/mct/schedule";
import { formatSessionRange, getSessionsForCourse, getUpcomingSessions } from "@/config/mct/schedule-utils";
import type { CourseSlug, ScheduledSession, SessionStatus } from "@/config/mct/types";
import { Badge } from "@/design-system/components/badge";
import { CTAButton } from "@/design-system/components/cta-button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/design-system/components/table";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import { useMct } from "./MctContext";
import ScheduleEmpty from "./ScheduleEmpty";
import SectionHead from "./SectionHead";

type ScheduleTableProps = { courseSlug?: CourseSlug };

const MAX_TIMEOUT_MS = 2_147_483_647;

const statusClass: Record<SessionStatus, string> = {
  open: "border-electric/40 text-electric",
  filling: "border-depth-purple/60 bg-depth-purple/20 text-on-dark",
  full: "border-white/10 text-on-dark-tertiary",
  confirmed: "border-electric/60 bg-electric/10 text-on-dark",
  cancelled: "border-white/10 text-on-dark-tertiary",
};

const headClass = "mct-eyebrow h-auto px-4 py-3 text-on-dark-tertiary";

export default function ScheduleTable({ courseSlug }: ScheduleTableProps) {
  const { locale, t, surface, setPrefill } = useMct();
  const ref = useReveal<HTMLElement>();
  const [now, setNow] = useState(() => new Date());

  const rows = useMemo(
    () =>
      courseSlug ? getSessionsForCourse(sessions, courseSlug, now) : getUpcomingSessions(sessions, now),
    [courseSlug, now],
  );

  useEffect(() => {
    const next = rows[0];
    if (!next) return;
    const untilStart = new Date(next.startsAt).getTime() - Date.now();
    const timer = window.setTimeout(
      () => setNow(new Date()),
      Math.min(MAX_TIMEOUT_MS, Math.max(0, untilStart) + 1000),
    );
    return () => window.clearTimeout(timer);
  }, [rows]);

  const requestSeat = (session: ScheduledSession) =>
    setPrefill(
      {
        tier: "public",
        intent: session.status === "full" ? "waitlist" : "seat",
        courseSlug: session.courseSlug,
        sessionId: session.id,
      },
      "schedule-row",
    );

  return (
    <section ref={ref} className="mct-reveal py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHead
          eyebrow={t.schedule.eyebrow}
          title={courseSlug ? t.course.datesTitle : t.schedule.title}
        />
        {rows.length === 0 ? (
          <ScheduleEmpty courseSlug={courseSlug} />
        ) : (
          <div className="rounded-2xl border border-white/10 bg-mct-navy-elevated" data-reveal-child>
            <Table>
              <TableHeader>
                <TableRow className="border-white/10 hover:bg-transparent">
                  {!courseSlug && <TableHead className={headClass}>{t.schedule.columns.course}</TableHead>}
                  <TableHead className={headClass}>{t.schedule.columns.dates}</TableHead>
                  <TableHead className={headClass}>{t.schedule.columns.hours}</TableHead>
                  <TableHead className={headClass}>{t.schedule.columns.language}</TableHead>
                  <TableHead className={headClass}>{t.schedule.columns.status}</TableHead>
                  <TableHead className={headClass}>
                    <span className="sr-only">{t.schedule.rowCta}</span>
                    {t.schedule.columns.action}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((session) => {
                  const course = courses[session.courseSlug];
                  const isFull = session.status === "full";

                  return (
                    <TableRow key={session.id} className="border-white/10 hover:bg-white/5">
                      {!courseSlug && (
                        <TableCell className="font-semibold text-on-dark">
                          <span className="mr-2 font-mono text-xs text-electric">{course.codes[0]}</span>
                          {course.title[locale]}
                        </TableCell>
                      )}
                      <TableCell className="whitespace-nowrap text-on-dark">
                        {formatSessionRange(session, locale)}
                      </TableCell>
                      <TableCell className="whitespace-nowrap font-mono text-xs text-dim">
                        {t.schedule.hoursValue}
                      </TableCell>
                      <TableCell className="text-dim">{t.schedule.languages[session.language]}</TableCell>
                      <TableCell>
                        <div className="flex flex-col items-start gap-1">
                          <Badge variant="outline" className={cn("font-mono", statusClass[session.status])}>
                            {t.schedule.status[session.status]}
                          </Badge>
                          {session.seatsLeft !== undefined && !isFull && (
                            <span className="text-xs text-dim">
                              {fill(t.schedule.seatsLeft, { n: session.seatsLeft })}
                            </span>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <CTAButton
                          variant="tertiary"
                          onClick={() => requestSeat(session)}
                          data-cta={`${surface}:schedule-row`}
                        >
                          {isFull ? t.schedule.empty.notify : t.schedule.rowCta}
                        </CTAButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </section>
  );
}
