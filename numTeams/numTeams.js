var numTeams = function (rating) {
  const res = [];
  btk(rating, res);
  return res.length;

};

function btk(rating, res, arr = [], index = 0) {
  if (arr.length === 3) {
    res.push(arr)
    return;
  }

  for (let i = index; i < rating.length; i++) {
    const last = arr[arr.length - 1];
    const first = arr[0];
    if (!last || last < rating[i] && last >= first) {
      arr.push(rating[i])
      btk(rating, res, arr.concat(), i + 1)
      arr.pop();
    } else if (first && last > rating[i] && last <= first) {
      arr.push(rating[i])
      btk(rating, res, arr.concat(), i + 1)
      arr.pop();
    }
  }
}