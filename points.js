function findBestStudent(students) {
  if (!students || students.length === 0) {
    // Проверяем, что массив не пустой
    return null;
  }

  return students.reduce((best, current) => {
    if (
      current.score > best.score ||
      (current.score === best.score &&
        new Date(current.date) < new Date(best.date))
    ) {
      return current;
    }
    return best;
  }, students[0]);
}

module.exports = findBestStudent;
