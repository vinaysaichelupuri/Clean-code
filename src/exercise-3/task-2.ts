export function getFullName(firstName?: string, lastName?: string): string {
  if (firstName && lastName) {
    return `${firstName} ${lastName}`;
  } else if (firstName) {
    return `${firstName}`;
  } else if (lastName) {
    return `${lastName}`;
  } else {
    return "Anonymous";
  }
}

console.log(getFullName("John", "Doe"));
console.log(getFullName("John"));
