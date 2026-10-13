import { ChevronRight } from 'lucide-react'

interface Props {
  label: string
  steps: string[]
}

/** Wrapping step chips, so the diagram never overflows its card at any width. */
export default function PipelineFlow({ label, steps }: Props) {
  return (
    <figure className="min-w-0 rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
      <figcaption className="mb-3 font-mono text-xs uppercase tracking-widest text-zinc-500">
        {label}
      </figcaption>
      <ol className="flex flex-wrap items-center gap-x-1 gap-y-2">
        {steps.map((step, i) => (
          <li key={step} className="flex min-w-0 items-center gap-1">
            <span className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-2.5 py-1.5 text-xs font-medium text-zinc-200">
              <span className="font-mono text-sky-300">{i + 1}</span>
              {step}
            </span>
            {i < steps.length - 1 && (
              <ChevronRight
                size={14}
                className="flex-none text-zinc-600"
                aria-hidden="true"
              />
            )}
          </li>
        ))}
      </ol>
    </figure>
  )
}
