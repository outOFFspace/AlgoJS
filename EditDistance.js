/**
Based on the edit distance between two words, give the edit distance (Levenshtein distance)
*/

function editDistance(w1,w2) {
    if (!w1.length) return w2.length;
    if (!w2.length) return w1.length;

    return Math.min(
        editDistance(w1.substr(1), w2) + 1,
        editDistance(w2.substr(1), w1) + 1,
        editDistance(w1.substr(1), w2.substr(1)) + (w1[0] !== w2[0] ? 1 : 0)
    );
}
