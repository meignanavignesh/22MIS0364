export const getPriorityScore =
  (notification) => {

    let score = 0;

    if (
      notification.Type ===
      "Placement"
    ) {
      score += 30;
    }

    else if (
      notification.Type ===
      "Result"
    ) {
      score += 20;
    }

    else {
      score += 10;
    }

    return score;

};