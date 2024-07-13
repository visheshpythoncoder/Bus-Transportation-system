def min_max_pages(days, pages):
    total_pages = sum(pages)
    max_pages_per_day = max(pages)
    
    # Binary search for the minimum of the maximum pages read in any day
    left, right = max_pages_per_day, total_pages
    while left < right:
        mid = (left + right) // 2
        if can_distribute(pages, mid, days):
            right = mid
        else:
            left = mid + 1
    
    return left

def can_distribute(pages, max_pages_per_day, days):
    current_sum = 0
    required_days = 1
    
    for pages_count in pages:
        current_sum += pages_count
        if current_sum > max_pages_per_day:
            required_days += 1
            current_sum = pages_count
            if required_days > days:
                return False
    
    return True

# Example usage:
days = 5
pages = [1, 1, 1, 1, 1]
result = min_max_pages(days, pages)
print("Minimum number of pages read in a day:", result)