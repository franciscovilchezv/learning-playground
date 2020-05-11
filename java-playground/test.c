#include <stdio.h>

int main(){
  int a = 3;
  {
    printf("%d\n", a);
    int a = 4;
    printf("%d\n", a);
  }
  printf("%d\n",a);
  return 0;
}
