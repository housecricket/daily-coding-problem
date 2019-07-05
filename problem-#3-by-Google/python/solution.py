class Node(object):

    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def serialize(tree_node):

    preorder_list = preorder_trav(tree_node)

    return ' '.join(str(x) for x in preorder_list)


def preorder_trav(node):

    tree_list = []

    # use ' ' to represent different nodes
    if node is not None:
        tree_list.append(node.val)
        tree_list.append(preorder_trav(node.left))
        tree_list.append(preorder_trav(node.right))
    # use -1 to represent an empy leaf
    else:
        tree_list.append('-1')

    return tree_list

def deserialize(tree_string):

    tree_list = tree_string.split(' ')
    tree = rebuild(tree_list)
    return tree


def rebuild(tree_list):

    node = Node(None)

    if len(tree_list) != 0:     
        value = tree_list.pop(0)
        # not empty
        if value != '-1':       
            node = Node(value)
            node.left = rebuild(tree_list)
            node.right = rebuild(tree_list)
            
    return node

def main():

    node = Node('root', Node('left', Node('left.left')), Node('right'))

    print(serialize(node))

    print(deserialize(serialize(node)).left.left.val)

if __name__ == '__main__':
    main()