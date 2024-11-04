export function parseMarkdownLinks(text: string): string {
  // Replace markdown links with HTML links
  return text.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">$1</a>'
  )
}
