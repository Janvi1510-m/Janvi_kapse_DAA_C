📑 Problem Statement
Generate all prime numbers up to a given number n using an efficient algorithm (Sieve of Eratosthenes or simple prime check), and analyze its performance.
C code 
#include <stdio.h>
#include <stdbool.h>

void generatePrimes(int n) {
    bool prime[n+1];
    for (int i = 0; i <= n; i++) {
        prime[i] = true;
    }

    prime[0] = prime[1] = false;

    for (int p = 2; p * p <= n; p++) {
        if (prime[p]) {
            for (int i = p * p; i <= n; i += p) {
                prime[i] = false;
            }
        }
    }

    printf("Prime numbers up to %d are:\n", n);
    for (int i = 2; i <= n; i++) {
        if (prime[i]) {
            printf("%d ", i);
        }
    }
    printf("\n");
}

int main() {
    int n;
    printf("Enter value of n: ");
    scanf("%d", &n);
    generatePrimes(n);
    return 0;
}

⏱ Time Complexity

Outer loop runs till 𝑛.
Inner loop marks multiples → approx 𝑛/𝑝.

Total complexity ≈ 𝑂(𝑛loglog𝑛)

💾 Space Complexity
Boolean array of size n+1.
Space = 𝑂(𝑛)
