#!/usr/bin/env python3
"""make_multiplier module"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Returns a function that multiplies a float by multiplier
    """
    def multiplier_func(x: float) -> float:
        return x * multiplier
    return multiplier_func
