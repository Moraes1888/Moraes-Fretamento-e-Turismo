export const metadata = {
  title: 'Admin - Moraes Fretamento',
  description: 'Área administrativa do Moraes Fretamento e Turismo',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  )
}