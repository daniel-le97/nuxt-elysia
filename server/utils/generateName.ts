function generateName(): string {
  const prefixes: string[] = ['Fire', 'Ice', 'Thunder', 'Shadow', 'Mystic', 'scary', 'brave']
  const suffixes: string[] = ['blade', 'heart', 'spark', 'wing', 'storm']
  function getRandomElement(array: string[]): string {
    const randomIndex: number = Math.floor(Math.random() * array.length)
    return array[randomIndex]
  }
  const generatedName: string = getRandomElement(prefixes) + getRandomElement(suffixes)
  return generatedName.toLowerCase()
}

export default generateName