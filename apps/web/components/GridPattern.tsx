export function GridPattern() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-950">
      <div className="absolute h-full w-full">
        <div
          className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-900 [mask-image:linear-gradient(0deg,white,transparent)] dark:[mask-image:linear-gradient(0deg,#0a0a0a,transparent)]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(15 23 42 / 0.04)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
          }}
        />
      </div>
    </div>
  )
}

