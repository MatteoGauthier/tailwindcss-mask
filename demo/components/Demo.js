export default function Demo({ twClass }) {
  return (
    <div className="flex flex-col items-center space-y-8">
      <code className="p-4 font-mono text-lg font-black text-purple-400 bg-gray-800 rounded">{twClass}</code>
      <div className={`flex w-full max-w-2xl space-x-1 ${twClass}`}>
        <div className="w-1/6 h-24 bg-orange-600 odd:bg-blue-800" />
        <div className="w-1/6 h-24 bg-orange-600 odd:bg-blue-800" />
        <div className="w-1/6 h-24 bg-orange-600 odd:bg-blue-800" />
        <div className="w-1/6 h-24 bg-orange-600 odd:bg-blue-800" />
        <div className="w-1/6 h-24 bg-orange-600 odd:bg-blue-800" />
        <div className="w-1/6 h-24 bg-orange-600 odd:bg-blue-800" />
      </div>
    </div>
  )
}
