import random
import string


def random_string(length: int = 10) -> str:
    """
    return a random string of lowercase letters and digits with a given length
    """
    return "".join(
        [random.choice(string.ascii_letters + string.digits) for n in range(length)]
    )
