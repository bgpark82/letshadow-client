export function toYMD(date: string) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = toDouble(d.getMonth() + 1);
  const day = toDouble(d.getDate());
  return `${year}년 ${month}월 ${day}일`;
}

/** one digit to two digit */
export function toDouble(single: number) {
  const s = single.toString();
  return s.length === 1 ? '0' + s : s;
}
