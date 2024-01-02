export default function guardrail(mathFunction) {
  const queueList = [];
  try {
    const result = mathFunction();
    queueList.push(result);
  } catch (error) {
    queueList.push(`Error: ${error.message}`);
  } finally {
    queueList.push('Guardrail was processed');
  }
  return queueList;
}
