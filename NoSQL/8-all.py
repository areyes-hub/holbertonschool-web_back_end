#!/usr/bin/env python3
"""list_all module"""


def list_all(mongo_collection):
    """
    lists all documents in a collection
    """
    if not mongo_collection:
        return []
    else:
        return mongo_collection.find()
