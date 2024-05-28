export default function LoginLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section style={{margin: "0 auto", maxWidth: "1500px"
      }}>
        {children}
      </section>
    )
  }