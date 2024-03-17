export default function DashboardLayout({
    children, // will be a page or nested layout
}: { children: React.ReactNode }) {
    return(
        <section>
            {/* Include shared UI here e.g. header or sidebar */}
            <nav></nav>
            {children}
        </section>
    )
}