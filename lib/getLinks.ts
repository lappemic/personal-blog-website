export interface Link {
  date: string
  url: string
  title: string
}

export async function getLinks(): Promise<Link[]> {
  const sheetId = process.env.GOOGLE_SHEET_ID

  if (!sheetId) {
    console.warn('GOOGLE_SHEET_ID not set')
    return []
  }

  try {
    const res = await fetch(
      `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json`,
      { next: { revalidate: 60 } } // Cache for 60 seconds
    )

    const text = await res.text()
    // Google wraps the JSON in a callback, strip it
    const jsonString = text.slice(47, -2)
    const data = JSON.parse(jsonString)

    const links: Link[] = data.table.rows
      .map((row: { c: Array<{ v: string | null }> }) => ({
        date: row.c[0]?.v || '',
        url: row.c[1]?.v || '',
        title: row.c[2]?.v || '',
      }))
      .filter((link: Link) => link.url) // Filter out empty rows

    // Sort by date, newest first
    return links.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error('Failed to fetch links:', error)
    return []
  }
}
