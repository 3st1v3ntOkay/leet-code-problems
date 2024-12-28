# My travel through linked list challenges

- Ways to create a linked list:

```bash
  class ListNodeClass {
    constructor(val, next) {
      this.val = (val === undefined ? 0 : val);
      this.next = (next === undefined ? null : next);
    }
  }

  function ListNodeFunc(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
```

- Declare linked list:

```bash
  const a = new ListNode(1);
  const b = new ListNode(2);
  const c = new ListNode(4);

  a.next = b;
  b.next = c;
  c.next = a; // a way to make a loop
```

## Reverse Linked List

> [!NOTE]
> [Challenge](https://leetcode.com/problems/reverse-linked-list/)

**Help:**

- [@JangirSumit](https://leetcode.com/problems/reverse-linked-list/solutions/4346121/simple-solution-using-stack/)

## Merge Two Sorted Lists

> [!NOTE]
> [Challenge](https://leetcode.com/problems/merge-two-sorted-lists/)

**Help:**

- [@ikboljonme](https://leetcode.com/problems/merge-two-sorted-lists/solutions/3353373/javascript-easy-explanation-100-for-loop/)

## Linked List Cycle

> [!NOTE]
> [Challenge](https://leetcode.com/problems/linked-list-cycle/)

## Reorder List

> [!NOTE]
> [Challenge](https://leetcode.com/problems/reorder-list/)

**Help:**

- [Barbariansyah](https://leetcode.com/problems/reorder-list/solutions/1734333/3-step-space-efficient-javascript-solution/)

## Remove Nth Node From End of List

> [!NOTE]
> [Challenge](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

## Copy List with Random Pointer

> [!NOTE]
> [Challenge](https://leetcode.com/problems/copy-list-with-random-pointer/description/)

**Useful**:

- [Deep copy](https://en.wikipedia.org/wiki/Object_copying#Deep_copy)

**Help**:

- [@vanAmsen](https://leetcode.com/problems/copy-list-with-random-pointer/solutions/4003262/97-92-hash-table-linked-list/)

## Add Two Numbers

> [!NOTE]
> [Challenge](https://leetcode.com/problems/add-two-numbers/description/)

**Help**:

- [@vanAmsen](https://leetcode.com/problems/add-two-numbers/solutions/4091359/100-beats-java-c-python-javascript-c-php/)

## Find The Duplicate Number

> [!NOTE]
> [Challenge](https://leetcode.com/problems/find-the-duplicate-number/)

**Help**:

- [@vanAmsen](https://leetcode.com/problems/find-the-duplicate-number/solutions/4062141/97-77-6-approaches-set-count-binary-search-fast-slow-mark-sort/)

## LRU Cache

> [!NOTE]
> [Challenge](https://leetcode.com/problems/lru-cache/)

**Help**:

- [@Hongbo-Miao](https://leetcode.com/problems/lru-cache/solutions/399146/clean-javascript-solution/) - no so good

- [@EduAir](https://leetcode.com/problems/lru-cache/solutions/4226556/javascript-lru-two-linked-lists/)
