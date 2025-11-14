import Breadcrumb from './Breadcrumb'

function PageHeader({ title, subtitle, breadcrumbs, children }) {
  return (
    <div className="bg-gray-50 border-b">
      <div className="container py-8">
        {breadcrumbs && <Breadcrumb items={breadcrumbs} />}
        <div className="mt-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
          {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
          {children}
        </div>
      </div>
    </div>
  )
}

export default PageHeader
