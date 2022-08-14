export const choise = <T>(arr: T[], rand = Math.random): T | undefined =>
  arr[Math.floor(rand() * arr.length)]
