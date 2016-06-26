[
  {
    lang: 'ruby',
    alg: {
      bubble: {
        algorithm: `
unsorted_array = [7, 3, 6, 1, 9, 8, 2, 5, 4]

def bubble_sort(array)
  n = array.length
  loop do
    swapped = false

    (n-1).times do |i|
      if array[i] > array[i+1]
        array[i], array[i+1] = array[i+1], array[i]
        swapped = true
      end
      p i
    end

    break if not swapped
  end

  array
end

bubble_sort(unsorted_array) # [1,2,3,4,5,6,7,8,9]
        `,
        space: {
          worst: "O(1)"
        },
        time: {
          best: "O(n)",
          worst: "O(n&sup2)"
        }
      },
      heap: {
        algorithm: `
unsorted_array = [35, -8, 11, 1, 68, 0, 3]

def heap_sort(array)  
  n = array.size  
  a = [nil] + array             # heap root [0]=>[1]  
  (n / 2).downto(1) do |i|  
    down_heap(a, i, n)  
  end  
  while n > 1  
    a[1], a[n] = a[n], a[1]  
    n -= 1  
    down_heap(a, 1, n)  
  end  
  a.drop(1)                     # heap root [1]=>[0]  
end  
  
def down_heap(a, parent, limit)  
  wk = a[parent]  
  while (child = 2 * parent) <= limit  
    child += 1  if child < limit and a[child] < a[child + 1]  
    break  if wk >= a[child]  
    a[parent] = a[child]  
    parent = child  
  end  
  a[parent] = wk  
end  
  
heap_sort(unsorted_array)  #=> [-8, 0, 1, 3, 11, 35, 68]  
        `,
        space: {
          worst: "O(1)"
        },
        time: {
          best: "O(n log(n))",
          worst: "O(n log(n))"
        }
      },
      insertion: {
        algorithm: `
unsorted_array = [1, 5, 3, 4, 6, 3]

def insertion_sort(array)
  final = [array[0]]
  array.delete_at(0)
  # main code
  for i in array
    final_index = 0
    while final_index < final.length
      if i <= final[final_index]
        final.insert(final_index,i)
        break
      elsif final_index == final.length-1
        final.insert(final_index+1,i)
        break
      end
      final_index+=1
    end
  end
  # output
  final
end

insertion_sort(unsorted_array) # [1, 3, 3, 4, 5, 6]
        `,
        space: {
          worst: "O(1)"
        },
        time: {
          best: "O(n)",
          worst: "O(n&sup2)"
        }
      },
      merge: {
        algorithm: `
unsorted_array = [1, 5, 3, 4, 6, 3]

def mergesort(list)
  return list if list.size <= 1
  mid = list.size / 2
  left = list[0, mid]
  right = list[mid, list.size]
  merge(mergesort(left), mergesort(right))
end

def merge(left, right)
  sorted = []
  until left.empty? || right.empty?
    if left.first <= right.first
      sorted << left.shift
    else
      sorted << right.shift
    end
  end
  sorted.concat(left).concat(right)
end

mergesort(unsorted_array) # [1, 3, 3, 4, 5, 6]
        `,
        space: {
          worst: "O(n)"
        },
        time: {
          best: "O(n log(n))",
          worst: "O(n log(n))"
        }
      },
      selection: {
        algorithm: `
unsorted_array = [9,8,6,1,2,5,4,3,9,50,12,11]

def selection_sort(array)
  n = array.size - 1

  n.times do |i|
    index_min = i

    (i + 1).upto(n) do |j|
      index_min = j if array[j] < array[index_min]
    end

    array[i], array[index_min] = array[index_min], array[i] if index_min != i
  end
  array
end

selection_sort(unsorted_array) # [1, 2, 3, 4, 5, 6, 8, 9, 9, 11, 12, 50]
        `,
        space: {
          worst: "O(1)"
        },
        time: {
          best: "O(n log(n))",
          worst: "O(n log(n))"
        }
      },
      shell: {
        algorithm: `
unsorted_array = [35, -8, 11, 1, 68, 0, 3]

def shell_sort(array)
  inc = array.size / 2
  while inc > 0
    inc.upto(array.size-1){|i|
      j = i
      temp = array[i]
      while j >= inc and array[j-inc] > temp
        array[j] = array[j - inc]
        j -= inc
      end
      array[j] = temp
    }
    inc = (inc==2 ? 1 : inc*10/22)
  end
  array
end

shell_sort(unsorted_array) # [-8, 0, 1, 3, 11, 35, 68]
        `,
        space: {
          worst: "O(1)"
        },
        time: {
          best: "O(n)",
          worst: "O(n log(n)&sup2)"
        }
      },
      quick: {
        algorithm: `
unsorted_array = [5,1,2,9,5,9,7,4,8,0,5,3,2,5,8,0]

def quicksort(array)
  return array if array.length <= 1

  pivot_index = (array.length / 2).to_i
  pivot_value = array[pivot_index]
  array.delete_at(pivot_index)

  lesser = Array.new
  greater = Array.new

  array.each do |x|
    if x <= pivot_value
      lesser << x
    else
      greater << x
    end
  end

  return quicksort(lesser) + [pivot_value] + quicksort(greater)
end

quicksort(unsorted_array) # [0, 0, 1, 2, 2, 3, 4, 5, 5, 5, 5, 7, 8, 8, 9, 9]
        `,
        space: {
          worst: "O(log(n))"
        },
        time: {
          best: "O(n log(n))",
          worst: "O(n&sup2)"
        }
      }
    }
  },










  
  {
    lang: 'javascript',
    alg: {
      bubble: {
        algorithm: `
unsorted_array = [7, 3, 6, 1, 9, 8, 2, 5, 4]

def bubble_sort(array)
  n = array.length
  loop do
    swapped = false

    (n-1).times do |i|
      if array[i] > array[i+1]
        array[i], array[i+1] = array[i+1], array[i]
        swapped = true
      end
      p i
    end

    break if not swapped
  end

  array
end

bubble_sort(unsorted_array) # [1,2,3,4,5,6,7,8,9]
        `,
        space: {
          worst: "O(1)"
        },
        time: {
          best: "O(n)",
          worst: "O(n&sup2)"
        }
      },
      heap: {
        algorithm: `
unsorted_array = [35, -8, 11, 1, 68, 0, 3]

def heap_sort(array)  
  n = array.size  
  a = [nil] + array             # heap root [0]=>[1]  
  (n / 2).downto(1) do |i|  
    down_heap(a, i, n)  
  end  
  while n > 1  
    a[1], a[n] = a[n], a[1]  
    n -= 1  
    down_heap(a, 1, n)  
  end  
  a.drop(1)                     # heap root [1]=>[0]  
end  
  
def down_heap(a, parent, limit)  
  wk = a[parent]  
  while (child = 2 * parent) <= limit  
    child += 1  if child < limit and a[child] < a[child + 1]  
    break  if wk >= a[child]  
    a[parent] = a[child]  
    parent = child  
  end  
  a[parent] = wk  
end  
  
heap_sort(unsorted_array)  #=> [-8, 0, 1, 3, 11, 35, 68]  
        `,
        space: {
          worst: "O(1)"
        },
        time: {
          best: "O(n log(n))",
          worst: "O(n log(n))"
        }
      },
      insertion: {
        algorithm: `
unsorted_array = [1, 5, 3, 4, 6, 3]

def insertion_sort(array)
  final = [array[0]]
  array.delete_at(0)
  # main code
  for i in array
    final_index = 0
    while final_index < final.length
      if i <= final[final_index]
        final.insert(final_index,i)
        break
      elsif final_index == final.length-1
        final.insert(final_index+1,i)
        break
      end
      final_index+=1
    end
  end
  # output
  final
end

insertion_sort(unsorted_array) # [1, 3, 3, 4, 5, 6]
        `,
        space: {
          worst: "O(1)"
        },
        time: {
          best: "O(n)",
          worst: "O(n&sup2)"
        }
      },
      merge: {
        algorithm: `
unsorted_array = [1, 5, 3, 4, 6, 3]

def mergesort(list)
  return list if list.size <= 1
  mid = list.size / 2
  left = list[0, mid]
  right = list[mid, list.size]
  merge(mergesort(left), mergesort(right))
end

def merge(left, right)
  sorted = []
  until left.empty? || right.empty?
    if left.first <= right.first
      sorted << left.shift
    else
      sorted << right.shift
    end
  end
  sorted.concat(left).concat(right)
end

mergesort(unsorted_array) # [1, 3, 3, 4, 5, 6]
        `,
        space: {
          worst: "O(n)"
        },
        time: {
          best: "O(n log(n))",
          worst: "O(n log(n))"
        }
      },
      selection: {
        algorithm: `
unsorted_array = [9,8,6,1,2,5,4,3,9,50,12,11]

def selection_sort(array)
  n = array.size - 1

  n.times do |i|
    index_min = i

    (i + 1).upto(n) do |j|
      index_min = j if array[j] < array[index_min]
    end

    array[i], array[index_min] = array[index_min], array[i] if index_min != i
  end
  array
end

selection_sort(unsorted_array) # [1, 2, 3, 4, 5, 6, 8, 9, 9, 11, 12, 50]
        `,
        space: {
          worst: "O(1)"
        },
        time: {
          best: "O(n log(n))",
          worst: "O(n log(n))"
        }
      },
      shell: {
        algorithm: `
unsorted_array = [35, -8, 11, 1, 68, 0, 3]

def shell_sort(array)
  inc = array.size / 2
  while inc > 0
    inc.upto(array.size-1){|i|
      j = i
      temp = array[i]
      while j >= inc and array[j-inc] > temp
        array[j] = array[j - inc]
        j -= inc
      end
      array[j] = temp
    }
    inc = (inc==2 ? 1 : inc*10/22)
  end
  array
end

shell_sort(unsorted_array) # [-8, 0, 1, 3, 11, 35, 68]
        `,
        space: {
          worst: "O(1)"
        },
        time: {
          best: "O(n)",
          worst: "O(n log(n)&sup2)"
        }
      },
      quick: {
        algorithm: `
unsorted_array = [5,1,2,9,5,9,7,4,8,0,5,3,2,5,8,0]

def quicksort(array)
  return array if array.length <= 1

  pivot_index = (array.length / 2).to_i
  pivot_value = array[pivot_index]
  array.delete_at(pivot_index)

  lesser = Array.new
  greater = Array.new

  array.each do |x|
    if x <= pivot_value
      lesser << x
    else
      greater << x
    end
  end

  return quicksort(lesser) + [pivot_value] + quicksort(greater)
end

quicksort(unsorted_array) # [0, 0, 1, 2, 2, 3, 4, 5, 5, 5, 5, 7, 8, 8, 9, 9]
        `,
        space: {
          worst: "O(log(n))"
        },
        time: {
          best: "O(n log(n))",
          worst: "O(n&sup2)"
        }
      }
    }
  }
]