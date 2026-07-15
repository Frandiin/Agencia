export default function BrowserChrome({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-gray-200 dark:border-gray-700/50 bg-gray-100 dark:bg-gray-800 px-4 py-2.5">
      <div className="flex gap-1.5">
        <div className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <div className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
      </div>
      <div className="flex-1 mx-4">
        <div className="mx-auto max-w-[200px] rounded-md bg-white dark:bg-gray-800 dark:border dark:border-gray-600 px-3 py-1 text-[10px] text-gray-500 dark:text-gray-400 text-center truncate">
          {name.toLowerCase().replace(/\s+/g, "")}.com.br
        </div>
      </div>
    </div>
  );
}
