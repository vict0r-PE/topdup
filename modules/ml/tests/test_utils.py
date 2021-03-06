import random

from qcore.asserts import assert_eq

from modules.ml.utils import random_string


class TestRandomString:
    def test_length(self):
        length = random.randint(1, 100)
        str1 = random_string(length)
        # sanity check
        assert_eq(length, len(str1))

    def test_different_each_time(self):
        str1 = random_string(5)
        str2 = random_string(5)
        # check two calls return differnt strings
        assert_eq(2, len(set([str1, str2])))
